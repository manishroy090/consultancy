<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\VisaType;
use App\Models\Offer;
use App\Models\NewsBlog;
use App\Models\Testimonials;
use App\Models\Teammember;
use App\Models\Visa;
use App\Models\Aboutus;
use App\Models\AboutDetails;
use App\Models\Patner;
use App\Models\Services;
use App\Models\Whyus;
use App\Models\Country;


class FrontendController extends Controller
{
    
    public function home(){

     return response()->json([
       'visatypes'=>VisaType::has('countries')->with('countries')->get(),
       'offers'=>Offer::all(),
       'blogs'=>NewsBlog::all(),
       'testimonials'=>Testimonials::all(),
       'teammembers'=> Teammember::all(),
       'aboutus'=>Aboutus::first(),
       'patners'=>Patner::all(),
       'services'=>Services::where('specialoffer',null)->get(),
       'specialservices'=>Services::where('specialoffer',1)->get(),
       'whyus'=>Whyus::first(),
       'countries'=>Country::has('visas')->get()
     ]);
    }

    public function visa($visaTypeSlug, $countrySlug){
      $visadetails = VisaType::where('slug', $visaTypeSlug)
      ->with(['countries' => function ($query) use ($countrySlug) {
          $query->where('slug', $countrySlug)->with('visas')->get();
      }])
      ->first();

      // $countryHavingOtherVisaType = Country::where('slug',$countrySlug)->with(['visaTypes'=>function($query) use ($visaTypeSlug){
      //   $query->where('slug','!=',$visaTypeSlug);
      // }])->first();
    


     $countriesHavingSimilarVisa = VisaType::with(['countries'=>function($query) use ($countrySlug){
            $query->where('slug','!=',$countrySlug);
     },'visas'])->where('slug',$visaTypeSlug)->first();


     return response()->json([
         'visadetails'=>$visadetails,
         'countriesHavingSimilarVisa'=>$countriesHavingSimilarVisa,
        //  'countryHavingOtherVisaType'=>$countryHavingOtherVisaType
     ]);
      
    }


    public function blogs (){
      $blogs = NewsBlog::all();
      return response()->json([
        'blogs'=> $blogs
      ]);

    }
}

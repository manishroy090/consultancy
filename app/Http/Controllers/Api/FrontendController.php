<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;
use App\Models\VisaType;
use App\Models\Visa;
use Illuminate\Support\Facades\DB;
use App\Models\Offer;
use App\Models\NewsBlog;
use App\Models\Testimonials;
use App\Models\Teammember;
use App\Models\Aboutus;
use App\Models\AboutDetails;
use App\Models\Patner;

class FrontendController extends Controller
{
    

    public function home(){
     $about=Aboutus::first();
     return response()->json([
       'visatypes'=>VisaType::has('visa')->get(),
       'offers'=>Offer::all(),
       'blogs'=>NewsBlog::all(),
       'testimonials'=>Testimonials::all(),
       'teammembers'=> Teammember::all(),
       'aboutus'=>$about,
       'aboutdetails'=>AboutDetails::where('about_id',$about->id)->get(),
       'patners'=>Patner::all()
     ]);
    }

    public function visa($id){
        $visas =Visa::select('countries.name')
        ->join('countries','visas.country_id','=','countries.id')
        ->join('visa_types','visas.visatype_id','=','visa_types.id')
        ->where('visas.visatype_id',$id)
        ->get();
        return response()->json([
          'visas'=> $visas
        ]
         
        );
    }


    public function blogs (){
      $blogs = NewsBlog::all();
      return response()->json([
        'blogs'=> $blogs
      ]);

    }
}

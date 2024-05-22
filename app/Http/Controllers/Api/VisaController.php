<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;
use Illuminate\Support\Facades\Validator;
use App\Models\Visa;
use App\Models\VisaType;


class VisaController extends Controller
{
    public function index (){
        $countries = Country::all();
        $visa = Visa::all();
        return  response()->json([
            'countries'=>$countries,
            'visa'=>$visa,
            'visaType'=>VisaType::all()
        ]);
    }

    public function store(Request $request){

      
 
        $validator = Validator::make($request->all(),[
            'visa_id'=>"required",
            'country_id'=>"required"

        ],[
            'visa_id'=>"Visa is required",
            'country_id'=>"Country is required"
        ]);

        if($validator->fails()){
          return response()->json([
            'validation_error'=>$validator->messages()
          ]);

        }else{
            $visaType =$validator->validate();
            Visa::create($visaType);
            return response()->json([
                'staus'=>200,
                'messeage'=>"Visatype is create is Successfully"
            ]);

        }
      
    }

    public function edit ($id){
        $visatype = Visa::where('id',$id)->first();
        return $visatype;

    }

    public function update(Request $request,$id){

        $validator = Validator::make($request->all(),[
            'visa_id'=>"required",
            'country_id'=>"required"

        ],[
            'visa_id'=>"Visa is required",
            'country_id'=>"Country is required"
        ]);


        if($validator->fails()){
            return response()->json([
              'validation_error'=>$validator->messages()
            ]);
        
  
          }else{
              $visaType =$validator->validate();
              Visa::where('id',$id)->update($visaType);
              return response()->json([
                  'staus'=>200,
                  'messeage'=>"Visatype is Update is Successfully"
              ]);
  
        }

    }
    public function delete($id){
        Visa::where('id',$id)->delete();
        return "Visatype is Deleted";
        
    }
}

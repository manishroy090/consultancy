<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;
use Illuminate\Support\Facades\Validator;
use App\Models\VisaType;

class VisatypeController extends Controller
{
    public function index (){
        $countries = Country::all();
        $visaTypes = VisaType::all();
        return  response()->json([
            'countries'=>$countries,
            'visaTypes'=>$visaTypes
        ]);
    }

    public function store(Request $request){
 
        $validator = Validator::make($request->all(),[
            'name'=>"required",
            'country_id'=>"Required"

        ],[
            
            'name'=>"Name is required",
            'country_id'=>"Select Country"
        ]);

        if($validator->fails()){
          return response()->json([
            'validation_error'=>$validator->messages()
          ]);

        }else{
            $visaType =$validator->validate();
            VisaType::create($visaType);
            return response()->json([
                'staus'=>200,
                'messeage'=>"Visatype is create is Successfully"
            ]);

        }
      
    }

    public function edit ($id){
        $visatype = VisaType::where('id',$id)->first();
        return $visatype;

    }

    public function update(Request $request,$id){

        $validator = Validator::make($request->all(),[
            'name'=>"required",
            'country_id'=>"Required"

        ],[
            
            'name'=>"Name is required",
            'country_id'=>"Select Country"
        ]);


        if($validator->fails()){
            return response()->json([
              'validation_error'=>$validator->messages()
            ]);
        
  
          }else{
              $visaType =$validator->validate();
              VisaType::where('id',$id)->update($visaType);
              return response()->json([
                  'staus'=>200,
                  'messeage'=>"Visatype is Update is Successfully"
              ]);
  
        }

    }
    public function delete($id){
        VisaType::where('id',$id)->delete();
        return "Visatype is Deleted";
        
    }
}

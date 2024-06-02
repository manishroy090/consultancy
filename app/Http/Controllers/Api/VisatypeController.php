<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\VisaType;
use Illuminate\Support\Facades\Validator;
use App\Models\Country;
use Illuminate\Support\Str;


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
            'meta_title'=>'nullable',
            'meta_keyword'=>'nullable',
            'meta_description'=>'nullable',
            'meta_schema'=>'nullable'

        ],[
            
            'name.requried'=>"Name is required",
        ]);

        if($validator->fails()){
          return response()->json([
            'validation_error'=>$validator->messages()
          ]);

        }else{
            $visaType =$validator->validate();
            $visaType['slug']=Str::slug($visaType['name']);
   
            VisaType::create($visaType);
            return response()->json([
                'status'=>200,
                'message'=>"Visatype created successfully"
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
            'meta_title'=>'nullable',
            'meta_keyword'=>'nullable',
            'meta_description'=>'nullable',
            'meta_schema'=>'nullable'

        ],[
            
            'name.required'=>"Name is required",
        ]);


        if($validator->fails()){
            return response()->json([
              'validation_error'=>$validator->messages()
            ]);
        
  
          }else{
              $visaType =$validator->validate();
              $visaType['slug']=Str::slug($visaType['name']);
              VisaType::where('id',$id)->update($visaType);
              return response()->json([
                  'status'=>200,
                  'message'=>"Visatype update  successfully"
              ]);
  
        }

    }
    public function delete($id){
        VisaType::where('id',$id)->delete();
        return response()->json([
            'message'=>"Visatype deleted successfully"
        ]);
        
        
    }
}

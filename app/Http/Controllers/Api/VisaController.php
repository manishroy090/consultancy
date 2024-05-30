<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;
use Illuminate\Support\Facades\Validator;
use App\Models\Visa;
use App\Models\VisaType;
use App\Models\Course;
use Illuminate\Support\Facades\DB;

class VisaController extends Controller
{
    public function index (){
         $visa = DB::select("SELECT
         visas.id,
         visas.image,
          countries.name AS country,
          visa_types.name AS visa ,
          courses.name AS  course
          FROM  visas
         LEFT JOIN countries ON visas.country_id=countries.id
         LEFT JOIN visa_types ON visas.visa_type_id=visa_types.id
         LEFT JOIN courses ON visas.course_id=courses.id
         GROUP BY visas.id, countries.name,visa_types.name,courses.name, visas.image");
        return  response()->json([
            'countries'=>Country::all(),
            'visa'=>$visa,
            'visaType'=>VisaType::all(),
            'courses'=>Course::all()
        ]);
    }

    public function store(Request $request){
 
        $latest = Visa::latest()->first();
        $validator = Validator::make($request->all(),[
            'visa_type_id'=>"required",
            'country_id'=>"required",
            'image'=>'required',
            'description'=>'required',
            'working_process'=>'required',
            'document_required'=>"required",

        ],[
            'visa_type_id.required'=>"Visa type is required",
            'image.required'=>"Image is required",
            'description.required'=>"Description is required",
            'country_id.required'=>"Country is required",
            'working_process.required'=>'Working Process is required',
            'document_required.required'=>"Document required is required"
        ]);

        if($validator->fails()){
          return response()->json([
            'validation_error'=>$validator->messages()
          ]);

        }else{

            try {
                $filename = image_upload('visas', $request->image,'visas_'. (($latest->id?? 0) + 1), 64, 40);
                $visaType =$validator->validate();
                $visaType['image']=$filename;
                $visaType['image']=$filename;
                Visa::create($visaType);
                return response()->json([
                    'status'=>200,
                    'message'=>"Visa created successfully"
                ]);
            } catch (\Throwable $th) {
           
            }
           

        }
      
    }

    public function edit ($id){
        $visa = Visa::where('id',$id)->first();
        return response()->json([
             'visa'=>$visa
        ]);
     

    }

    public function update(Request $request,$id){

        $validator = Validator::make($request->all(),[
            'visa_type_id'=>"required",
            'country_id'=>"required",
            'description'=>'required',
            'course_id'=>"nullable",
            'working_process'=>'required',
            'document_required'=>"required"

        ],[
            'visa_type_id.required'=>"Visa is required",
            'country_id.required'=>"Country is required",
            'description.required'=>"Description is required",
            'working_process.required'=>'working_process is required',
            'document_required.required'=>"document_required is required"

        ]);

        


        if($validator->fails()){
            return response()->json([
              'validation_error'=>$validator->messages()
            ]);
        
  
          }else{
              $visaType =$validator->validate();
             $oldData = Visa::where('id',$id)->first();
              $filename = image_update('visas', $request->image,$oldData->image,'visas_'. (($oldData->id?? 0) + 1),64, 40);
              $visaType['image'] = $filename;
              $oldData->update($visaType);
              return response()->json([
                  'status'=>200,
                  'message'=>"Visatype  updated Successfully"
              ]);
  
        }

    }
    public function delete($id){
        Visa::where('id',$id)->delete();
        return response()->json([
            'message'=>"Visatype  deleted successfully"
        ]);
        
        
    }
}

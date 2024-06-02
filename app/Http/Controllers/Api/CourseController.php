<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use Illuminate\Support\Facades\Validator;


class CourseController extends Controller
{
   
    public function index (){
        return Course::all();
      }
      public function store(Request $request){
        $validatore =  Validator::make($request->all(),[
              'name'=>"required",
              'meta_title'=>'nullable',
              'meta_keyword'=>'nullable',
              'meta_description'=>'nullable',
              'meta_schema'=>'nullable'
          ],[
            'name.required'=>"Name is required"
          ]);

          if($validatore->fails()){
               return response()->json([
                  'validator_err'=>$validatore->messages()
               ]);
          }
  
          else{
              $course = $validatore->validate();
              Course::create($course);
  
              return response()->json([
                  'status'=>200,
                  'message'=>"Course created sucessfully"
              ]);
          }
      }
      public function edit($id)
      {
          return Course::where('id',$id)->first();
      }
  
      public function update($id,Request $request)
      {
          $validatore =  Validator::make($request->all(), [
              'name' => "required",
              'meta_title'=>'nullable',
              'meta_keyword'=>'nullable',
              'meta_description'=>'nullable',
              'meta_schema'=>'nullable'
          ],[
            'name.required'=>"Name is required"
          ]);
  
          if ($validatore->fails()) {
              return response()->json([
                  'validator_err' => $validatore->messages()
              ]);
          } else {
              $oldData= Course::where('id',$id)->first();
              $course = $validatore->validate();
              $oldData->update($course);
          }
          return response()->json([
              'status' => 200,
              'message' => "Course updated sucessfully"
          ]);
      }
  
      function delete($id){
          $course= Course::where('id', $id)->first();
          image_delete('country',$course->image);
          $course->delete();
          return response()->json([
              'message'=>"Course deleted Successfully"
          ]);
      }
}

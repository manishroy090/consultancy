<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Testimonials;
use Illuminate\Support\Facades\Validator;

class TestimonialsController extends Controller
{
    public function index(){
        return Testimonials::all();
    }


    public function store(Request $request){
    
        $validator =  Validator::make($request->all(),[
            'name'=>'required',
            'designation'=>"required",
            'image'=>"required",
            'description'=>"required" 
        ],
        [
            'name.required'=>"Name is required",
            'designation.required'=>"Designation is required",
            'description.required'=>"Description is required",
            'image.required'=>"Image is required"
        ]);



        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
            
        }
       
        else{
            $filename = image_upload('testimonial', $request->image,$request->name, 64, 40);
            $data =  $validator->validate();
            $data['image'] = $filename;
            Testimonials::create($data);
            return response()->json([
                'status'=>200,
                'message'=>"Testimonials created successfully"

            ]);
        }

      
    }


    public function edit ($id){
        return Testimonials::where('id',$id)->first();
    }

    public function update($id,Request $request){

      
        $validator =  validator::make($request->all(),[
            'name'=>'required',
            'designation'=>"required",
            'description'=>"required"
        ],[
            'name.required'=>"Name is required",
            'designation.required'=>"Designation is required",
            'description.required'=>"Description is required"
        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }
        else{
            $data =  $validator->validate();
            $oldTestimonial = Testimonials::where('id',$id)->first();
            $filename = image_update('testimonial', $request->image,$oldTestimonial->image,$request->name, 64, 40);
            $data['image'] = $filename;
            $oldTestimonial->update($data);
            return response()->json([
                'status'=>200,
                'message'=>"Testimonials updated successfully"

            ]);
        }

    }


    public function delete($id){

        $testimonials = Testimonials::where('id',$id)->first();
        image_delete('testimonial', $testimonials ->image);
        $testimonials->delete();
        return  response()->json([
           'message'=>"Testimonials deleted successfully"
        ]);

    }
}

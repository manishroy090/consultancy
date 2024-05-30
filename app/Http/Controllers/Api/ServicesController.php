<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Services;

class ServicesController extends Controller
{
    public function index(Request $request){
        return Services::all();
    }
    public function store(Request $request){
      $validator =  Validator::make($request->all(),[
            'title'=>'required',
            'description'=>'required',
            'icon'=>'nullable',
            'image'=>'required',
            'specialoffer'=>'nullable'
        ],[
            'title.required'=>"Title is required",
            'image.required'=>"Image is required",
            'description.required'=>"Description is required",
        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }

        else{
            $imgarray= [];
          if($request->icon){
            $imgarray= [
                'image'=>$request->image,
                'icon'=>$request->icon
            ];
          }else{
            $imgarray= [
                'image'=>$request->image,
            ];
          }

          
           $filename = upload_multiple_image('service',$imgarray ,$request->title, 800, 533);               
               $service = $validator->validate();
               $service['image'] = $filename['image'];
               if($request->icon){
                $service['icon'] = $filename['icon'];
              }

            //   return dd($service);
               Services::create($service);
              return response()->json([
                'status'=>200,
                 'message'=>"Service created successfully"
             ]);
        }

    }

    public function edit ($id){
        return  Services::where('id',$id)->first();

    }

    public function update($id,Request $request){
        $validator =  Validator::make($request->all(),[
            'title'=>'required',
            'description'=>'required',
            'specialoffer'=>'nullable'
        ],[
            'title.required'=>"Title is required",
            'description.required'=>"Description is required",
        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }

        else{
           $service = Services::where('id',$id)->first();
           $oldImages = [
             'image'=>$service->image,
             'icon'=>$service->icon
           ];

           $newImages =[
            'image'=>$request->image,
            'icon'=>$request->icon
           ]; 
            $imgFilename = updateMultipleImage('service',$newImages,$oldImages,$request->title, 64, 40);
          
            $service = $validator->validate();
            $service['image'] = $imgFilename['image'];
            $service['icon'] = $imgFilename['icon'];
             Services::where('id',$id)->update($service);
             return response()->json([
               'status'=>200,
                'message'=>"Service updated successfully"
            ]);
        }

    }

    public function delete($id){
        Services::where('id',$id)->delete();
        return response()->json([
            'message'=>'Service  deleted successfully '
        ]);

    }


}

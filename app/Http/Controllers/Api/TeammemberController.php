<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teammember;
use Illuminate\Support\Facades\Validator;

class TeammemberController extends Controller
{
    public function index(){
        return Teammember::all();
    }


    public function store(Request $request){
        $validator =  validator::make($request->all(),[
            'title'=>'required',
            'designation'=>"required",
            'image'=>'required'
        ],[
            'title.required'=>"Title is required",
            'designation.required'=>"Designation is required",
            'image.required'=>"Image is required"
        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }
        else{
            $filename = image_upload('teammember', $request->image,$request->title, 64, 40);
            $data =  $validator->validate();
            $data['image'] = $filename;
            Teammember::create($data);
            return response()->json([
                'status'=>200,
                'message'=>"Teammember  created successfully"

            ]);
        }

      
    }


    public function edit ($id){
        return Teammember::where('id',$id)->first();
    }

    public function update($id,Request $request){


        $validator =  validator::make($request->all(),[
            'title'=>'required',
            'designation'=>"required",
        ],[
            'title.required'=>"Title is required",
            'designation.required'=>"Designation is required",
        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }
        else{
            $data =  $validator->validate();
            $oldData = Teammember::where('id',$id)->first();
            $filename = image_update('teammember', $request->image,$oldData ->image,$request->title, 64, 40);
            $data['image'] =$filename;
            $oldData->update($data);
            return response()->json([
                'status'=>200,
                'message'=>"Teammember  updated successfully"

            ]);
        }

    }


    public function delete($id){

        $teammember = Teammember::where('id',$id)->first();
        image_delete('teammember', $teammember->image);
        $teammember->delete();
        return  response()->json([
            'message'=>"Teammember  deleted successfully"
        ]);

    }
}

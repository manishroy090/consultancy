<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Whyus;
use Illuminate\Support\Facades\Validator;

class WhyusController extends Controller
{
    public function index(){
        return Whyus::all();
    }


    public function store(Request $request){
       $validator =  validator::make($request->all(),[
            'title'=>'required',
            'description'=>"required"
        ],[
            'title.required'=>"Title is required",
            'description.required'=>"Description is required"
        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }
        else{
            $data =  $validator->validate();
            Whyus::create($data);
            return response()->json([
                'status'=>200,
                'message'=>"Whyus Created successfully"

            ]);
        }

      
    }


    public function edit ($id){
        return Whyus::where('id',$id)->first();
    }

    public function update($id,Request $request){
        $validator =  validator::make($request->all(),[
            'title'=>'required',
            'description'=>"required"
        ],[
            'title.required'=>"Title is required",
            'description,required'=>"Description is required"
        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }
        else{
            $data =  $validator->validate();
            Whyus::where('id',$id)->update($data);
            return response()->json([
                'status'=>200,
                'message'=>"Whyus updated successfully"

            ]);
        }

    }


    public function delete($id){

        Whyus::where('id',$id)->delete();
        return  response()->json([
           'message'=>"Whyus deleted Successfully"
        ]);

    }
}

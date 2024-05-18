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
            'title'=>"Title is required",
            'description'=>"Description is required"
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
                'message'=>"About us Created Successfully"

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
            'title'=>"Title is required",
            'description'=>"Description is required"
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
                'message'=>"About us Update Successfully"

            ]);
        }

    }


    public function delete($id){

        Whyus::where('id',$id)->delete();
        return  response()->json([
           'message'=>"About us Deleted"
        ]);

    }
}

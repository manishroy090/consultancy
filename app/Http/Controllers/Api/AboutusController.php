<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Aboutus;
use Psy\Readline\Hoa\Console;

class AboutusController extends Controller
{
    public function index(){
        return Aboutus::all();
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
            Aboutus::create($data);
            return response()->json([
                'status'=>200,
                'message'=>"About us Created Successfully"

            ]);
        }

      
    }


    public function edit ($id){
        return Aboutus::where('id',$id)->first();
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
            Aboutus::where('id',$id)->update($data);
            return response()->json([
                'status'=>200,
                'message'=>"About us Update Successfully"

            ]);
        }

    }


    public function delete($id){

        Aboutus::where('id',$id)->delete();
        return  response()->json([
           'message'=>"About us Deleted"
        ]);

    }

    public function details(Request $request){
        return dd($request->all());
    }
}
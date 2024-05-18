<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AboutDetails;
use Illuminate\Support\Facades\Validator;

class AboutDetailsController extends Controller
{
    public function index(){
       
        return AboutDetails::all();
    }


    public function store($id,Request $request){
         

        $validator = Validator::make($request->all(),[
           'title' => 'required|string',
            'description' => 'required|string',
        ],[
            'title.required' => 'Title is required',
            'description'=>"Description is required"

        ]);

        if($validator->fails()){
            return response()->json([
                'errors'=>$validator->messages()
            ]);
        }
        else{
            $data =  $validator->validate() +['about_id'=>$id];
            AboutDetails::create($data);
            return response()->json([
                'status'=>200,
                'message'=>"About us Created Successfully"

            ]);
        }

    }

    public function edit ($id){
        return AboutDetails::where('id',$id)->first();

    }

    public function update ($id ,Request $request){


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
            AboutDetails::where('id',$id)->update($data);
            return response()->json([
                'status'=>200,
                'message'=>"About us Update Successfully"

            ]);
        }


    }


    public function delete($id){
        AboutDetails::where('id',$id)->delete();
        return  response()->json([
           'message'=>"About us Deleted"
        ]);

    }
}

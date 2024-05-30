<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\NewsBlog;

class NewsblogController extends Controller
{
    public function index(){
        return NewsBlog::all();

    }

    public function store(Request $request){
       $validator = Validator::make($request->all(),[
            'title'=>'required',
            'description'=>'required',
            'image'=>'required'

        ],[
            'title.required'=>'Title is required',
            'description.required'=>'Description is required',
            'image.required'=>'image is required'

        ]);

        if($validator->fails()){
            return response()->json([
             'errors'=>$validator->messages()
            ]);

        }else{
            $filename = image_upload('blogs', $request->image,$request->title, 64, 40);
            $offer = $validator->validate();
            $offer['image'] =  $filename;
            NewsBlog::create($offer);
           
        }
        
        return response()->json([
            'status'=>200,
            'message'=>"News created successfully"
             
        ]);

    }


    public function edit ($id){
       return  NewsBlog::where('id',$id)->first();
 
    }


    public function update(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'title'=>'required',
            'description'=>'required',

        ],[
            'title.required'=>'Title is required',
            'description.required'=>'Description is required',

        ]);
  

        if($validator->fails()){
            return response()->json([
              'errors'=>$validator->messages()
            ]);
        }

   
        else{
            $oldNewsblog = NewsBlog::where('id',$id)->first();
            $newblog = $validator->validate();
            $filename = image_update('blogs', $request->image,$oldNewsblog  ->image,$request->title, 64, 40);
            $newblog['image'] =  $filename;
            $oldNewsblog ->update($newblog);
            return response()->json([
                'status'=>200,
                'message'=>"News updated  successfully"
            ]);

        }

    }

    public function delete($id){
        $newsblog = NewsBlog::where('id',$id)->first();
        image_delete('blogs', $newsblog->image);
        $newsblog->delete();
        return response()->json([
           'message'=>"News  deleted successfully"
        ]);

    }
}

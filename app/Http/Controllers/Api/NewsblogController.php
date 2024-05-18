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
            'title'=>'Title is required',
            'description'=>'Description is required',
            'image'=>'image is required'

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
            'status'=>"200",
            'message'=>"Offer Created Successfully"
             
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
            'title'=>'Title is required',
            'description'=>'Description is required',

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
                'staus'=>200,
                'messeage'=>"Offer is Update is Successfully"
            ]);

        }

    }

    public function delete($id){
        $newsblog = NewsBlog::where('id',$id)->first();
        image_delete('blogs', $newsblog->image);
        $newsblog->delete();
        return response()->json([
           'message'=>"Offer deleted"
        ]);

    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Offer;


class OfferController extends Controller
{
    public function index(){
        return Offer::all();

    }

    public function store(Request $request){    
       $validator = Validator::make($request->all(),[
            'title'=>'required',
            'description'=>'required',
            'icon'=>'required'
        ],[
            'title.required'=>'Title is required',
            'description.required'=>'Description is required',
            'icon.required'=>'Icon is required'

        ]);

        if($validator->fails()){
            return response()->json([
             'errors'=>$validator->messages()
            ]);

        }else{
            $filename = image_upload('offer', $request->icon,$request->title, 64, 40);
            $offer = $validator->validate();
            $offer['icon'] =  $filename;
            Offer::create($offer);
            return response()->json([
                'status'=>200,
                'message'=>"Offer created successfully"
                 
            ]);
        }
        
        // return dd($request->all());

    }


    public function edit ($id){
       return  Offer::where('id',$id)->first();
 
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
            $oldData = Offer::where('id',$id)->first();
            $offer = $validator->validate();
            $filename = image_update('offer', $request->icon,$oldData ->icon,$request->title, 64, 40);
            $offer['icon'] =  $filename;
            $oldData->update($offer);
        }
        return response()->json([
            'status'=>200,
            'message'=>"Offer update  successfully"
        ]);

    }

    public function delete($id){
      $offer = Offer::where('id',$id)->first();
      image_delete('offer', $offer->icon);
      $offer->delete();
        return response()->json([
           'message'=>"Offer  deleted successfully"
        ]);

    }
}

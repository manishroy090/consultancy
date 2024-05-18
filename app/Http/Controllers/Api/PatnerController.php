<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Patner;
use Illuminate\Support\Facades\Validator;

class PatnerController extends Controller
{
    public function index(){
        return Patner::all();
    }

    public function store(Request $request){
  
        $validatore =  Validator::make($request->all(),[
             'image'=>"required"
        ]);

        if($validatore->fails()){
             return response()->json([
                'validator_err'=>$validatore->messages()
             ]);
        }
        else{
            $filename = image_upload('patner', $request->image,"patners", 64, 40);
            $patner['image'] = $filename;
            Patner::create($patner);

        }

        return response()->json([
            'staus'=>200,
            'messeage'=>"Patner is Created is Successfully"
        ]);

    }

    public function edit($id){
        return Patner::where('id',$id)->first();
    }

    public function update($id,Request $request){
       
       $oldData = Patner::where('id',$id)->first();
       $data= $request->all();
       $filename = image_update('patner', $request->image,$oldData ->image,"patners", 64, 40);
       $data['image'] = $filename;
       $oldData->update($data);
       return response()->json([
        'staus'=>200,
        'messeage'=>"Patner is Updated Successfully"
    ]);
    }

    public function delete($id){
       $patner =  Patner::where('id',$id)->first();
       image_delete('patner', $patner->image);
       $patner->delete();
         return response()->json([
            'message'=>"Patner is  Deleted Successfully"
        ]);

    }
}

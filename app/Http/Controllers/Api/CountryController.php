<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Country;
use Psy\CodeCleaner\ReturnTypePass;

class CountryController extends Controller
{

    public function index (){
      return Country::all();
    }
    public function store(Request $request){
      $validatore =  Validator::make($request->all(),[
            'name'=>"required",
             'image'=>"required"
        ]);

        if($validatore->fails()){
             return response()->json([
                'validator_err'=>$validatore->messages()
             ]);
        }

        else{
            $filename = image_upload('country', $request->image,$request->name, 64, 40);
            $country = $validatore->validate();
            $country['image'] = $filename;
            Country::create($country);

            return response()->json([
                'status'=>200,
                'message'=>"Country created Sucessfully"
            ]);
        }
    }
    public function edit($id)
    {
        return Country::where('id',$id)->first();
    }

    public function update($id,Request $request)
    {
        $validatore =  Validator::make($request->all(), [
            'name' => "required",
        ]);

        if ($validatore->fails()) {
            return response()->json([
                'validator_err' => $validatore->messages()
            ]);
        } else {
            $oldImage = Country::where('id',$id)->first();
            $country = $validatore->validate();
            $filename = image_update('country', $request->image,$oldImage->image,$request->name,64, 40);
            $country['image'] = $filename;
            $oldImage->update($country);
        }
        return response()->json([
            'status' => 200,
            'message' => "Country Updated Sucessfully"
        ]);
    }

    function delete($id){
        $country = Country::where('id', $id)->first();
        image_delete('country',$country->image);
        $country->delete();
        return response()->json([
            'message'=>"Deleted Successfully"
        ]);
    }

}

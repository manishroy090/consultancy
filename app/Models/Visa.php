<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Country;
use App\Models\VisaType;
class Visa extends Model
{
    use HasFactory;
    protected $guarded = [];
    
    public function visatype(){
        return $this->belongsTo(VisaType::class);
    }

   
}

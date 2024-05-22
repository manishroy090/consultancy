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

    public function visaTypes()
    {
        return $this->belongsToMany(VisaType::class)->withPivot('expiry_date');
    }

    public function countries()
    {
        return $this->belongsToMany(Country::class,'countries')->withPivot('expiry_date');
    }
   
}

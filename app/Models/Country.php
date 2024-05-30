<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Visa;
use App\Models\VisaType;
use App\Models\Course;

class Country extends Model
{
    use HasFactory;
    protected $guarded =[];

    public function visaTypes()
    {
        return $this->belongsToMany(VisaType::class, 'visas');
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'visas');
    }


    public function visas()
    {
        return $this->hasMany(Visa::class, 'country_id','id');
    }
  
}

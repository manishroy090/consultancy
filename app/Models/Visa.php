<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Country;
use App\Models\VisaType;
use App\Models\Course;
class Visa extends Model
{
    use HasFactory;
    protected $fillable = [
        'visa_type_id',
        'country_id',
        'image',
        'description',
        'course_id',
        'slug',
        'working_process',
        'document_required'
    ];


    public function visaTypes()
    {
        return $this->belongsToMany(VisaType::class,'visa_types')->withPivot('expiry_date');
    }

    public function countries()
    {
        return $this->belongsToMany(Country::class,'countries')->withPivot('expiry_date');
    }
   
    public function courses(){
        return $this->belongsToMany(Course::class)->withPivot('expiry_date');
    }
}

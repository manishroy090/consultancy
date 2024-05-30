<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Visa;
use App\Models\Country;
use PhpParser\Node\Expr\FuncCall;

class VisaType extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function countries()
    {
        return $this->belongsToMany(Country::class, 'visas');
    }
    
    public function courses()
    {
        return $this->belongsToMany(Course::class, 'visas');
    }

    public function visas()
    {
        return $this->hasMany(Visa::class,'visa_type_id','id');
    }
   
   
}

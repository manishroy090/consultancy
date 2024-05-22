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
   
}

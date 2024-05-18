<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CountryController;
use App\Http\Controllers\Api\VisaController;
use App\Http\Controllers\Api\OfferController;
use App\Http\Controllers\Api\AboutusController;
use App\Http\Controllers\Api\ServicesController;
use App\Http\Controllers\Api\WhyusController;
use App\Http\Controllers\Api\TeammemberController;
use App\Http\Controllers\Api\TestimonialsController;
use App\Http\Controllers\Api\NewsblogController;
use App\Http\Controllers\Api\PatnerController;
use App\Http\Controllers\Api\FrontendController;
use App\Http\Controllers\Api\AboutDetailsController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function(){
    Route::post('/register','register');
    Route::post('/login','login');
});
// Route::controller(CountryController::class)->group(function(){
//     Route::post('/country', 'store');
// });
Route::group(['middleware' => "api"],function(){
    Route::post('/country', [CountryController::class,'store']);
    Route::get('/index', [CountryController::class, 'index']);
    Route::get('/edit/{id}', [CountryController::class, 'edit']);
    Route::post('/update/{id}', [CountryController::class, 'update']);
    Route::post('/delete/{id}', [CountryController::class, 'delete']);


});

Route::controller(VisaController::class)->group(function(){
    Route::group(['prefix'=>"visatype", 'as'=>'visatype.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
    });
  
});

Route::controller(OfferController::class)->group(function(){
    Route::group(['prefix'=>"offer", 'as'=>'offer.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
    });
});


Route::controller(AboutusController::class)->group(function(){
    Route::group(['prefix'=>"aboutus", 'as'=>'aboutus.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
        Route::post('/details','details');
    });
  
});

Route::controller(AboutDetailsController::class)->group(function(){
    Route::group(['prefix'=>"aboutdetails", 'as'=>'aboutdetails.'],function(){
        Route::get('/index','index');
        Route::post('/store/{id}','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
        Route::post('/details','details');
    });
  
});

Route::controller(ServicesController::class)->group(function(){
    Route::group(['prefix'=>"service", 'as'=>'service.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
    });
  
});


Route::controller(WhyusController::class)->group(function(){
    Route::group(['prefix'=>"whyus", 'as'=>'whyus.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
    });
  
});



Route::controller(TeammemberController::class)->group(function(){
    Route::group(['prefix'=>"teammember", 'as'=>'teammember.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
    });
  
});

Route::controller(TestimonialsController::class)->group(function(){
    Route::group(['prefix'=>"testimonial", 'as'=>'testimonial.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
    });
  
});

Route::controller(NewsblogController::class)->group(function(){
    Route::group(['prefix'=>"newsblog", 'as'=>'newsblog.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::get('delete/{id}','delete');
    });
  
});

Route::controller(PatnerController::class)->group(function(){
    Route::group(['prefix'=>"patner", 'as'=>'patner.'],function(){
        Route::get('/index','index');
        Route::post('/store','store');
        Route::get('edit/{id}','edit');
        Route::post('update/{id}','update');
        Route::post('delete/{id}','delete');
    });
  
});

Route::controller(FrontendController::class)->group(function(){
    Route::group(['prefix'=>"frontend", 'as'=>'frontend.'],function(){
        Route::get('/home','home');
        Route::get('/visa/{id}','visa');
        Route::get('/blogs','blogs');
      
    });
  
});
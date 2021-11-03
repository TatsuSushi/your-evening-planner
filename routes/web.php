<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MyDashboardController;
use App\Http\Controllers\myPlannerController;
use App\Http\Controllers\FriendListController;
use App\Http\Controllers\MakeEventController;
use App\Mail\FriendInvitationMail;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\MailController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Get routes
Route::get('/', function (){
    return view('welcome');
})->name('welcome');

Route::get('/my-dashboard', [MyDashboardController::class,'index'])->name('my-dashboard');

Route::get('/make-event', [MakeEventController::class, 'index'])->name('make-event');

Route::get('/my-planner', [myPlannerController::class,'index'])->name('my-planner');


Route::get('/poll', function (){
   return view ('poll');
})->name('poll');

Route::get('/friend-list', [FriendListController::class,'index'])->name('friend-list');

Route::get('/invitation-email', function (){
   return new FriendInvitationMail();
});

Route::get('/accept-invitation/{code}', [MailController::class, 'acceptInvite']);

Route::get('/invitation-accepted', function() {
   return view('invitation-accepted');
})->name('invitation-accepted');

Route::get('/invitation-declined', function() {
    return view('invitation-declined');
})->name('invitation-declined');


//Post routes
Route::post('/my-planner-add',[myPlannerController::class, 'post']);

Route::post('/my-planner-edit', [myPlannerController::class, 'updateEvent']);

Route::post('/my-planner-delete', [myPlannerController::class, 'deleteEvent']);

Route::post('/friend-list-unfriend',[FriendListController::class,'unfriend']);

Route::post('/friend-list-add',[FriendListController::class, 'post']);

Route::post('/make-event-add',[MakeEventController::class,'post']);


//Auth routes
Auth::routes();

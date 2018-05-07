<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/////Users
Route::post('users/register', 'UserController@create');
Route::post('users/authorization', 'UserController@authorization');
Route::get('users', 'UserController@getAll');
Route::get('users/{id}', 'UserController@getById');
Route::post('users/{id}', 'UserController@updateById');
Route::delete('users/{id}', 'UserController@removeById');
/////Hotels
Route::get('hotels', 'HotelController@getAll');
Route::get('hotels/{id}', 'HotelController@getById');
Route::delete('hotels/{id}', 'HotelController@removeById');
Route::post('hotels/{id}', 'HotelController@updateById');
Route::post('hotels', 'HotelController@create');

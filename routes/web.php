<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return inertia('Welcome');
});

Route::inertia('/about', 'About');
Route::inertia('/contact', 'Contact');

Route::get('/users', [UserController::class, 'index'])->name('users.index');
Route::get('/users/create', [UserController::class, 'create'])->name('users.create');
Route::post('/users', [UserController::class, 'store'])->name('users.store');
Route::get('/users/{user:id}', [UserController::class, 'show'])->name('users.show');
Route::get('/users/{user:id}/edit', [UserController::class, 'edit'])->name('users.edit');
Route::patch('/users/{user:id}', [UserController::class, 'update'])->name('users.update');
Route::delete('/users/{user:id}', [UserController::class, 'destroy'])->name('users.destroy');

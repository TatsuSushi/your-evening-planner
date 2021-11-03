<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MyDashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $userID = Auth::id();
        //Display events of authenticated users
        $events = DB::table("events_users")
            ->join('users', 'users.id', '=' , 'events_users.user_id')
            ->join('events', 'events.id', '=' , 'events_users.event_id')
            ->select('events.*')
            ->where('user_id', $userID)
            ->get();

        // Show who is attending the event
        $participants = DB::table("events_users")
            ->join('users', 'users.id', '=' , 'events_users.user_id')
            ->join('events', 'events.id', '=' , 'events_users.event_id')
            ->select( 'event_id', 'user_id', 'users.*')
            ->where('user_id', '!=', $userID)
            ->get();

        return view('my-dashboard')
            ->with('events', $events)
            ->with('participants', $participants)
            ->with('userID', $userID)
            ;
    }
}

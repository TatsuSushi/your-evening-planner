<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class myPlannerController extends Controller
{
    public function post(Request $request)
    {
        // if form validation was successful, add new record with data given by user input
        // if added successfully, return successful statement
        $userID = Auth::id();
        $eventID = DB::table('events')->insertGetId([
            'host_id' => $userID,
            'title' => $request->input("title"),
            'venue' => $request->input('venue'),
            'date'=> $request->input('date'),
            'time'=> $request->input('time'),
            'event_type'=> $request->input('type'),
            'description' => $request->input('description')
        ]);

        DB::table('events_users')->insert([
            'user_id' => $userID,
            'event_id' => $eventID
        ]);

        return redirect("/my-planner")
            ->with('status', 'Event has been successfully added!');
    }

    //Show all events of current user
    public function index(){
        $userID = Auth::id();
        $events = DB::table("events_users")
            ->join('users', 'users.id', '=' , 'events_users.user_id')
            ->join('events', 'events.id', '=' , 'events_users.event_id')
            ->select('events.*')
            ->where('user_id', $userID)
            ->get();

        return view('my-planner', ['events' => $events]);
    }

    //update selected event
    public function updateEvent(Request $request){
        $userID = Auth::id();
        $selectedID= $request->input("eventID");
        DB::table('events')->where('id', $selectedID)->update([
            'host_id' => $userID,
            'title' => $request->input("title"),
            'venue' => $request->input('venue'),
            'date'=> $request->input('date'),
            'time'=> $request->input('time'),
            'event_type'=> $request->input('type'),
            'description' => $request->input('description')
        ]);

        return redirect('/my-planner')
            ->with('status', 'Event has been successfully updated!');
    }

    //update selected event
    public function deleteEvent(Request $request){
        $userID = Auth::id();
        $selectedID= $request->input("eventID");
        $hostID = DB::table('events')
            ->where('id', $selectedID)
            ->value('host_id');

        // If authenticated user is the host, delete the event itself and for current user and other users
        if( $userID === $hostID){

            DB::table('events_users')
                ->where('event_id', $selectedID)
                ->delete();

            DB::table('events')
                ->where('id', $selectedID)
                ->where('host_id', $userID)
                ->delete();

        }
        // Else, delete event from authenticated user's planner
        else{
            DB::table('events_users')
                ->where([
                        ['event_id', $selectedID],
                        ['user_id', $userID]]
                )
            ->delete();
        }
        return redirect('/my-planner')
            ->with('status', 'Event has been successfully deleted!');
    }
}

<?php

namespace App\Http\Controllers;

use App\Mail\FriendInvitationMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class MakeEventController extends Controller
{
    public function post(Request $request){

        $userID = Auth::id();

        //Split multiple emails with "," into an array
        $friendEmails = explode("," , $request->input('friend-invite-email'));

        $eventID = DB::table('events')->insertGetId([
            'title' => $request->input("title"),
            'host_id' => $userID,
            'event_type'=> $request->input('type'),
            'venue' => $request->input('venue'),
            'date'=> $request->input('date'),
            'time'=> $request->input('time'),
            'description' => $request->input('description')
        ]);

        DB::table('events_users')->insert([
            'user_id'=> $userID,
            'event_id' => $eventID
        ]);

        //Get individual email from the array
        foreach ($friendEmails as $friendEmail){
            //Send email after submit button is hit along with inserting a new record of event
            //Code to send email here
            Mail::to($friendEmail)->send(new FriendInvitationMail($eventID, $friendEmail));
        }
        return redirect('/make-event')->with('status', 'Event has been successfully added and invitations have been sent out!');
    }

    //Generate view and show all of authenticated user's friends
    public function index(){
        $user = Auth::user();
        $friends = $user->getFriends();
        return view('make-event',[
            'friends' => $friends
        ]);
    }

}

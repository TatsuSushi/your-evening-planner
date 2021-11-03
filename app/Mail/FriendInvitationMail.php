<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Junges\InviteCodes\Facades\InviteCodes;

class FriendInvitationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     * Parameter values are obtained from MakeEvenController
     * @return void
     */
    public function __construct($eventID, $friendEmail)
    {
        $this->eventID = $eventID ;
        $this->friendEmail = $friendEmail ;

    }

    /**
     * Build the message.
     *Generate invitation code and add event to the user's planner if they accepted the invitation
     * @return $this
     */
    public function build()
    {

        $hostName = Auth::user()->first_name . " " . Auth::user()->last_name;
        $invite_code = InviteCodes::create()
            ->expiresIn('2')
            ->restrictUsageTo($this->friendEmail)
            ->save();

        //Update event id value obtained from MakeEventController in invites table
        DB::table('invites')
            ->where('code', $invite_code->code)
            ->update(['event_id' => $this->eventID]);

        $event = DB::table('events')->where('id', $this->eventID)->first();

        return $this->markdown('emails.invitation')
            ->with('hostName', $hostName)
            ->with('invite_code',$invite_code)
            ->with('event', $event);
    }

}

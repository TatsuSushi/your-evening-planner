@extends('layouts.app')

@section('content')
        <div id="make-event">
            <script>var csrf="{{@csrf_token()}}";</script>
            <script>
                var status = `{{ session('status') }}`;
                var friends = {!!json_encode($friends)!!};
            </script>
        </div>
        <script src="../js/make-event.js"></script>
@endsection


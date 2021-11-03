@extends('layouts.app')

@section('content')
    <div>
        <div id="my-planner"></div>
        <script>var csrf="{{@csrf_token()}}";</script>
        <script>
            var status = `{{ session('status') }}`;
            var events = {!!json_encode($events)!!};
        </script>
        <script src="../js/my-planner.js"></script>
    </div>
@endsection


<?php
require_once __DIR__ . "./DB.php";


header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
if(isset($_GET["method"]) && $_GET["method"]=='GET'){
    
    echo json_encode(getTasks());
}

if(isset($_GET["method"]) && $_GET["method"]=='POST'){
    $body = file_get_contents("php://input");
    $task=json_decode($body);


    saveTask($task);
}

function getTasks()
{
    $pdo = Database::connect();
    $query = "select * from task order by finished asc;";
    $stmt = $pdo->query($query);
    $rows=array();
    while ($row = $stmt->fetch()) {
        $data = (object)[
            'id' => $row["id"],
            'name' => $row["name"],
            'finished' => $row["finished"],
        ];
        $rows[]=$data;
    }
    return $rows;
}

function saveTask($task){
    $name=$task->name;
    $finished=$task->finished;
    $pdo = Database::connect();
    $query='';
    if(property_exists($task, "id") && $task->id != null) {
        $id=$task->id;
        $query = "update task set name='$name', finished=$finished where id=$id;";
    }else{
        $query = "insert into task(name, finished) values ('$name', $finished);";
    }
    $stmt=$pdo->prepare($query);
    $stmt->execute();
    echo json_encode($task);
}


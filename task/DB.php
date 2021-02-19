<?php
 class database{
     
     private static $dbName='todolist_db';
     private static $dbHost='localhost';
     private static $dbUsername='root';
     private static $dbPassword='root';
     private static $cont=null;
 

    public function __construct() { die('Init function is not allowed');}

    public static function connect(){ 
      
      self::$cont=new PDO("mysql:host=".self::$dbHost.";"."dbname=".self::$dbName,self::$dbUsername,self::$dbPassword);

      return self::$cont;
    }

    public static function disconnect(){self::$cont=null;}
}
?>
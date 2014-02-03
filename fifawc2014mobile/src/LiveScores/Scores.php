<?php namespace LiveScores;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Scores implements MessageComponentInterface {

    private $clients;    

    public function __construct() 
    {    
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) 
    {
        $this->clients->attach($conn);
    }

    public function onMessage(ConnectionInterface $from, $msg) 
    {            
        foreach ($this->clients as $client) {
            if ($from !== $client) {
                // The sender is not the receiver, send to each client connected
                $client->send($msg);
            }
        }
    }

    public function onClose(ConnectionInterface $conn) 
    {
        $this->clients->detach($conn);
    }

    public function onError(ConnectionInterface $conn, \Exception $e) 
    {     
        $conn->close();
    }


}
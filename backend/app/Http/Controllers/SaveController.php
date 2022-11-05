<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SaveController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->all();
        $userLogin = $user['login'];
        $response = Http::get('https://api.github.com/users/'.$userLogin.'/repos');
        $infoRepositories = $response->json();
        $arquivo = __DIR__ . '../../../data/repositorios_'.$userLogin.'.json';
        $json_formatado = json_encode($infoRepositories, JSON_PRETTY_PRINT| JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        file_put_contents($arquivo, $json_formatado);

        $retorno = [
            'sucesso' => true,
            'mensagem' => 'Arquivo Json gerado com sucesso'
        ];

         return $retorno;
    }
}
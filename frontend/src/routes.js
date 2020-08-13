import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicial from './pages/Inicial';
import Menu from './pages/Menu';
import Estabelecimentos from './pages/Estabelecimentos';
import NovoEstabelecimento from './pages/NovoEstabelecimento';
import AtualizarEstabelecimento from './pages/AtualizarEstabelecimento';
import Categorias from './pages/Categorias';
import NovaCategoria from './pages/NovaCategoria';
import AtualizarCategoria from './pages/AtualizarCategoria';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicial} />
                <Route path="/menu" component={Menu} />
                <Route path="/estabelecimentos" component={Estabelecimentos}/>
                <Route path="/novoEstabelecimento" component={NovoEstabelecimento}/>
                <Route path="/atualizarEstabelecimento" component={AtualizarEstabelecimento}/>
                <Route path="/categorias" component={Categorias}/>
                <Route path="/novaCategoria" component={NovaCategoria}/>
                <Route path="/AtualizarCategoria" component={AtualizarCategoria}/>
            </Switch>
        </BrowserRouter>
    )
}
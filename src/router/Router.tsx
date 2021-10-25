import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Homepage } from '../pages/HomePage/Homepage'
import { TablePage } from '../pages/TablePage/TablePage'
import { TeamsPage } from '../pages/TeamsPage/TeamsPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Homepage/>
                </Route>

                <Route exact path='/tabela'>
                    <TablePage/>
                </Route>

                <Route exact path='/times'>
                    <TeamsPage/>
                </Route>

                <Route>
                    <div>
                        <h1>Pagina Não Encontrada</h1>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

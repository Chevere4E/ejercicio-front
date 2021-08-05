import React from 'react';

import '../components/styles/badge.css';

class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            page : 1,
            loading : true,
            error : null,
            data: {
                results: [],
            }
        };
    }

    componentDidMount(){
        this.setState({loading: true, error: null});
        this.fetchCharacters();    
    }

    fetchCharacters = async () => {
        try{     
            const response = await fetch(`https://www.swapi.tech/api/people?page=${this.state.page}&limit=10`);
            const data = await response.json();
            
            if(data.error){
                this.setState({
                    loading: false,
                    error: data.error,
                    data: {
                        results: [],
                    }
                });
            }else{
                this.setState({
                    loading: false,
                    error: null,
                    data: {
                        infor: data.info,
                        results: [].concat(this.state.data.results, data.results)
                    },
                    page: this.state.page+1
                });
            }
        }catch(error){
            console.log("error; set a state");
            this.setState({
                loading: false,
                error: error,
                data: {
                    results: [],
                }
            });
            console.log(this.state);
        }
    }

    render(){
        let element;
        if(this.state.error != null){
            element= <h1>Error: {this.state.error}</h1>;
        }
        else{
        element = (
            <React.Fragment>
                <div>
                    {this.state.loading && (
                        <div> <h1>CARGANDO ...</h1> </div>
                    )}
                    <div className="Badges__list">
                        <div className="row container ma">
                            {this.state.data.results.map((character)=>{
                                return(
                                    <div className="col-3"  key={character.id}>
                                        <div className="principalBox">
                                            <div className="center">
                                                <div className="col-md-auto">
                                                    
                                                    <span className="block fw-bolder">{character.name}</span>
                                                    <span className="block twitter">{character.uid}</span>
                                                    <span className="block fw-light">{character.url}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {!this.state.loading &&(
                                <div>
                                    <br />
                                    <button onClick={() => this.fetchCharacters()} className="btn btn-primary" type="button">Cargar mas</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
        }
        return element;
    }
}

export default Home;
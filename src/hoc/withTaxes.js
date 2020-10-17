import React from 'react'

const withTaxes = (Component) => {

    return (config) => class extends React.Component{

        state = {
            aguinaldo : ((config.nominal * 6) / 12 ),
            nominal: config.nominal
        }

        calculoAguinaldo = ( nominal ) => {

            this.setState({
                nominal : nominal,
                aguinaldo : ((nominal * 6) / 12)
            })

        }

        render(){
            return(
                <Component
                nominal={this.state.nominal}
                aguinaldo={this.state.aguinaldo}
                calculoAguinaldo={this.calculoAguinaldo}
                />
            )
        }

    }

}

export default withTaxes;
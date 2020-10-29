import React from 'react'

const CompanyInfo = ({companies, index}) => {
    // const {id, order, title, dates,duties, company} = companies;
    console.log(            companies[index].duties
        )
    // console.log(companies[index].id)
    return (
        <div>
            {`${companies[index].title} 
            ${companies[index].dates} 
            ${companies[index].duties.map((duty)=> {
                return duty
            })} 
            ${companies[index].company}`}
        </div>
    )
}

export default CompanyInfo;
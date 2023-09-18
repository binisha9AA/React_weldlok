import React from 'react';
import epcm from '../../assets/images/epcm.svg';
import engineer from '../../assets/images/engineer 1.svg';
import government from '../../assets/images/government 1.svg';
import civilContract from '../../assets/images/civil-contract.svg';
import distributors from '../../assets/images/distributors.svg';
import architects from '../../assets/images/architects.svg';
import fabrucators from '../../assets/images/fabrucators.svg';
import mining from '../../assets/images/mining-industry 1.svg';
import stateGov from '../../assets/images/state gov.svg';
import SectionHeading from '../sectionHeading/SectionHeading';

export const Customers = () => {
  const customers = [
    {
      id: 0,
      logo: epcm,
      cusName: 'EPCM',
    },
    {
      id: 1,
      logo: engineer,
      cusName: 'Engineer',
    },
    {
      id: 2,
      logo: government,
      cusName: 'Local Government',
    },
    {
      id: 3,
      logo: civilContract,
      cusName: 'Civil Contractor',
    },
    {
      id: 4,
      logo: distributors,
      cusName: 'Distributors',
    },
    {
      id: 5,
      logo: architects,
      cusName: 'Architects',
    },
    {
      id: 6,
      logo: fabrucators,
      cusName: 'Fabricators',
    },
    {
      id: 7,
      logo: mining,
      cusName: 'Mining',
    },
    {
      id: 8,
      logo: stateGov,
      cusName: 'State Gov',
    },
  ];

  return (
    <section className="sectionfour">
      <div className="container">
        <div className="wrapper">
          <div className="main_content">
            <SectionHeading
              sectionName={'our customer'}
              sectionHeading={'who we work for'}
            />
            <div className="s4_grid">
              {customers.map((customer) => (
                <div className="s4grid_one" key={customer.id}>
                  <img src={customer.logo} alt={customer.cusName} />
                  <p className="s4grid_one__customer">{customer.cusName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

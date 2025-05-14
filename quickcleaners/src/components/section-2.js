import * as React from 'react';



const ServicesDropdown = () => {
  const [openService, setOpenService] = React.useState(null); // Track only one open service

  const toggleService = (serviceId) => {
    setOpenService((prevService) =>
      prevService === serviceId ? null : serviceId // Close if clicked again, otherwise open
    );
  };

  const servicesData = [
    {
      id: 0,
      title: 'Laundry & Dry Cleaning',
      description: 
      <>
      <h3>Delicate Fabric Care</h3>
      <p> ◦ Expert cleaning for silk, cashmere, wool, and lace.</p>
      <p> ◦ Gentle processes that prevent shrinkage, fading, or damage.</p>
      <p> ◦ Use of specialized solvents to remove stains while preserving fabric quality.</p>
      <h3>Everyday Garments</h3>
      <p> ◦ Thorough cleaning of shirts, dresses, pants, skirts, and other daily wear.</p>
      <p> ◦ Removal of tough stains and unpleasant odors.</p>
      <p> ◦ Items are cleaned, pressed, and returned ready to wear.</p>
      <h3>Formal and Business Wear</h3>
      <p> ◦ Professional cleaning for suits, ties, uniforms, and evening gowns.</p>
      <p> ◦ Special care for intricate designs and delicate materials.</p>
      <p> ◦ Guaranteed sharp and polished results for every occasion.</p>
      </>
  ,
    },
    {
      id: 1,
      title: 'Specialized Garment Care',
      description: 
      <>
    <h3>Wedding Dress Cleaning and Preservation</h3>
    <p> ◦ Cleaning and restoring wedding gowns to remove stains, dirt, and discoloration.</p>
    <p> ◦ Professional preservation techniques to protect your dress for long-term storage.</p>
    <h3>Designer and Vintage Clothing</h3>
    <p> ◦ Expert cleaning and restoration for high-end and vintage garments, including intricate beadwork, embroidery, and delicate fabrics.</p>
    <h3>Leather and Suede Cleaning</h3>
    <p> ◦ Specialized cleaning for jackets, handbags, shoes, and other leather or suede items.</p>
    <p> ◦ Gentle techniques that maintain the softness and texture of the material while removing stains and dirt.</p>
    <h3>Specialty Attire</h3>
    <p> ◦ Cleaning services for prom dresses, sporting wear, costumes, uniforms, vestements and much more.</p>
      </>,
    },
    {
      id: 2,
      title: 'Household Fabric Cleaning',
      description: 
      <>
    <h3>Comforters, Blankets, and Bedding</h3>
    <p> ◦ Thorough cleaning of oversized items that won’t fit in standard home washers.</p>
    <p> ◦ Removal of stains, dust mites, and odors to ensure a clean and comfortable sleeping experience.</p>
    <h3>Curtains and Drapes</h3>
    <p> ◦ Professional cleaning to remove dust, allergens, and stains while preserving the fabric’s integrity and color.</p>
    <p> ◦ Gentle processes that prevent shrinkage or damage to delicate materials.</p>
    <h3>Table Linens</h3>
    <p> ◦ Expert cleaning for tablecloths, napkins, and other linens used for special occasions or daily meals.</p>
    <p> ◦ Removal of food stains and grease to restore a polished, fresh look.</p>
    <h3>Rugs and Small Carpets</h3>
    <p> ◦ Specialized cleaning techniques to refresh area rugs and small carpets, removing dirt and grime without damaging fibers.</p>
      </>,
    },
    {
      id: 3,
      title: 'Alterations & Repairs',
      description: 
      <>
      <h3>Hemming and Length Adjustments</h3>
      <p>◦ Shorten or lengthen pants, dresses, skirts, and sleeves to achieve the ideal fit.</p>
      <h3>Tailoring and Resizing</h3>
      <p>◦ Adjust the fit of garments such as suits, blazers, dresses, and shirts for a more tailored silhouette.</p>
      <h3>Zipper Repairs and Replacements</h3>
      <p>◦ Fix or replace broken zippers on pants, jackets, dresses, or bags.</p>
      <h3>Button Replacement and Reinforcement</h3>
      <p>◦ Replace missing or broken buttons, matching them closely to the original design.</p>
      <h3>Patchwork and Tear Repairs</h3>
      <p>◦ Mend holes, tears, and frayed seams with expert craftsmanship for a seamless finish.</p>
    </>,

    },
    {
      id: 4,
      title: 'Bulk Laundry',
      description: 
      <>
      <p>Convenient and cost-effective for large amounts of laundry</p>
      <p>Includes washing, drying, and neatly folding your items</p>
      <p>Perfect for families, businesses, or frequent bulk needs</p>



      </>,
    },
  ];

  return (
    <div className={`services-dropdown-container ${
        openService !== null ? 'dropdown-container-open' : ''
      }`}>
      {servicesData.map((service) => (
        <div key={service.id} className={`dropdown-service-item ${openService === service.id ? 'open' : 'closed'}`}>
          {/* Title */}
          <div
            className="dropdown-service-title"
            onClick={() => toggleService(service.id)}
          >
            <p>{service.title}</p>
            <span
              className={`service-arrow ${openService === service.id ? 'open' : ''}`}
            >
              ▼
            </span>
          </div>

          {/* Content */}
          <div
            className={`dropdown-service-content ${
              openService === service.id ? 'open' : ''
            }`}
          >
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDropdown;


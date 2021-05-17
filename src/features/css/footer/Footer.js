import styles from "./Footer.module.scss";

export default function Index() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFirstPart}>
        {footerFirstPartItems.map((items, index) => {
          return (
            <div className={styles.item} key={index}>
              {items.map((innerItems, index) => {
                return (
                  <ul key={index}>
                    {innerItems.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className={styles.footerSecondPart}>
        <div className={styles.socialIcons}>
          <span>Join us on</span>
          <ul>
            {socialIcons.map((socialIcon, index) => {
              return (
                <li key={index}>
                  <img src={socialIcon} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.essentials}>
          {essentials.map((item, index) => {
            return <img src={item} key={index} />;
          })}
        </div>
      </div>

      <div className={styles.footerLastPart}>
        <div className={styles.copyrightText}>
          Copyright © 2001-2019 Corporate Express Canada, Inc., a Staples
          company. All rights reserved.
        </div>
        <div className={styles.pageLinks}>
          <ul>
            {pageLinks.map((pageLink, index) => {
              return (
                <li key={index}>
                  <a href="#">{pageLink}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const footerFirstPartItems = [
  [
    [
      "Customer Service",
      "Help Center",
      "Contact Us",
      "Return an Item",
      "Recall Information",
      "Safety Data Sheets",
    ],
  ],
  [
    [
      "Corporate Info",
      "Staples Business Advantage Overview",
      "Industries Served",
      "Blog",
      "Our Brands",
    ],
  ],
  [
    [
      "Staples Corporate Solutions",
      "Office Products",
      "Technology Products",
      "Furniture",
      "Facilities",
      "Promotional Products",
    ],
  ],
  [
    ["New Customer", "Become a Customer", "Govt. Customers", "Memberships"],
    ["Join the Staples Team", "Carears"],
  ],
];

const socialIcons = [
  "/css/index/Linkedin.svg",
  "/css/index/Twitter.svg",
  "/css/index/Instagram.svg",
  "/css/index/Linkedin.svg",
  "/css/index/Twitter.svg",
];

const essentials = ["/css/index/boolfrog.png", "/css/index/essentials.png"];

const pageLinks = [
  "Terms & Conditions",
  "Privacy Policy",
  "Staples Business Advantage",
];

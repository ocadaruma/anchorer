function modifyHeading(tagName) {
  const headings = document.getElementsByTagName(tagName);

  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i];
    const links = heading.getElementsByTagName("a");

    // skip if heading already has a link because it's likely to be an anchor
    if (links.length > 0) {
      continue;
    }

    let id = heading.id;
    if (!id) {
      const children = heading.getElementsByTagName("*");
      for (let i = 0; i < children.length; i++) {
        id = children[i].id;
        if (id) {
          break;
        }
      }
    }

    if (id) {
      const a = document.createElement("a");
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      a.classList.add("__anchorer-anchor");
      a.setAttribute("aria-hidden", "true");
      a.href = "#" + id;

      svg.classList.add("__anchorer-link");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("width", "16");
      svg.setAttribute("height", "16");
      svg.setAttribute("aria-hidden", "true");

      path1.classList.add("__anchorer-path");
      path1.setAttribute("d", "m 58.698437,18.613219 c -9.607148,0.0914 -19.226043,-0.196881 -28.824697,0.171676 -9.414338,0.592093 -19.360672,5.94051 -22.2656832,15.394587 -3.21098,9.357138 1.8823161,20.276845 10.7912132,24.367919 7.66959,3.9862 16.457171,2.600452 24.761358,2.850206 5.179268,0 10.358538,0 15.537806,0");
      path2.classList.add("__anchorer-path");
      path2.setAttribute("d", "m 41.201134,37.48466 c 9.607146,0.09141 19.226041,-0.196881 28.824695,0.171676 9.414335,0.592093 19.360669,5.94051 22.26568,15.394589 3.210978,9.357139 -1.882317,20.276845 -10.791217,24.367923 -7.669584,3.986195 -16.457165,2.600456 -24.761352,2.850206 -5.179267,0 -10.358535,0 -15.537803,0");

      heading.classList.add("__anchorer-heading")
      heading.insertAdjacentElement("afterbegin", a);
      a.append(svg);
      svg.append(path1);
      svg.append(path2);
    }
  }
}

["h1", "h2", "h3", "h4", "h5", "h6"].forEach(modifyHeading);

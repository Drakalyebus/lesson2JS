export default (text) => text.toString().replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;').replaceAll("&", "&amp;").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br>").replaceAll("\r", "").replaceAll("\t", "&nbsp;&nbsp;&nbsp;&nbsp;");
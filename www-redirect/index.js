// Sends www.pornphipat.space/<anything> to the same path on pornphipat.space.
export default {
  fetch(req) {
    const url = new URL(req.url);
    url.hostname = 'pornphipat.space';
    return Response.redirect(url.toString(), 301);
  },
};

const serviceUrl = 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false';

async function getResponse(url){
  const response = await fetch(url);
  const data = await response.json();
  return {'ok': response.ok, 'status': response.status, "body": data};
}

describe('Test Engineer Service API', () =>{
  let response = undefined
  beforeAll( async () => {
    response = await getResponse(serviceUrl);
  })

  it('should have result code 200 - 299', () =>{
    expect(response.ok).toBe(true);
  })

  it('should have field "Name" set to "Carbon credits"', () =>{
    expect(response.body).toHaveProperty('Name','Carbon credits');
  })

  it('should have field "CanRelist" set to true', () =>{
    expect(response.body).toHaveProperty('CanRelist', true);
  })

  it('should have field "Promotions"', () =>{
    expect(response.body.Promotions).toBeDefined();
  })

  it('"Promotions" value should be Array', () =>{
    expect(Array.isArray(response.body.Promotions)).toEqual(true);
  })

  it('"Promotions" contains "Gallery" element', () =>{
    let galleryObjExists = false;
    response.body.Promotions.forEach(obj => {
      if(obj.Name === 'Gallery'){
        galleryObjExists = true;
      }
    })
    expect(galleryObjExists).toBe(true);
  })

  it('"Gallery" description CONTAINS "Good position in category"', () =>{
    let galleryObj = undefined;
    response.body.Promotions.forEach(obj => {
      if(obj.Name === 'Gallery'){
        galleryObj = obj;
      }
    })
    expect(galleryObj.Description).toMatch(/Good position in category/);
  })
})
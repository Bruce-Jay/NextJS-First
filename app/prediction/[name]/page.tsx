const getPredictedAge = async(name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`)
  return res.json()
}

const getPredictedGender = async(name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`)
  return res.json()
}

const getPredictedCountry = async(name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`)
  return res.json()
}

interface Params {
  params: {name: string}
}

export default async function Page({params}: Params) {
    const ageData = await getPredictedAge(params.name)
    const genderData = await getPredictedGender(params.name)
    const countryData = await getPredictedCountry(params.name)

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData])
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {" "}
        <div>
          Personal Info
        </div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender} </div>
        <div>Country: {country?.country[0].country_id} </div>
      </main>
    )
  }
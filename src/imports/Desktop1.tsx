function ButtonPrimary() {
  return (
    <div className="absolute contents left-[124px] top-[490px]" data-name="Button/Primary">
      <div className="absolute bg-[#1d7ce3] h-[55px] left-[124px] rounded-[8px] top-[490px] w-[220px]" />
      <div className="absolute font-['DM_Sans:Bold',sans-serif] font-bold h-[22px] leading-[normal] left-[179px] text-[18px] text-white top-[507px] w-[110px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Get Pricing</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function ButtonPrimary1() {
  return (
    <div className="absolute contents left-[402px] top-[490px]" data-name="Button/Primary">
      <div className="absolute bg-[#1d7ce3] h-[55px] left-[402px] rounded-[8px] top-[490px] w-[220px]" />
      <div className="absolute font-['DM_Sans:Bold',sans-serif] font-bold h-[24.655px] leading-[normal] left-[452px] text-[18px] text-white top-[506px] w-[120.267px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">Book A Demo</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full pt-[80px]" data-name="Desktop - 1">
      <div className="absolute bg-gradient-to-b from-[rgba(91,183,255,0)] h-[720px] left-0 to-[#1d7ce3] top-[37px] w-[1440px]" />
      <div className="absolute bg-[rgba(15,27,45,0.9)] h-[400px] left-[880px] rounded-[20px] top-[269px] w-[500px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[109px] leading-[1.5] left-[124px] not-italic text-[22px] text-white top-[calc(50%-130px)] w-[626px]">Smart communication tools + automations that help you capture more leads, book more appointments, save time, and track performance — all in one place.</p>
      <p className="absolute font-['Manrope:Bold',sans-serif] font-bold h-[94px] leading-[130px] left-[124px] text-[30px] text-white top-[calc(50%-245px)] w-[908px]">Simple Systems That Help Your Business Streamline Growth.</p>
      <ButtonPrimary />
      <ButtonPrimary1 />
    </div>
  );
}
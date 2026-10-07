function getDaysUntilNextPeriod(lastPeriodDate, cycleLength = 28) {
  const last = new Date(lastPeriodDate);
  const next = new Date(last);
  next.setDate(last.getDate() + cycleLength);

  const today = new Date();
  const diffDays = Math.ceil((next - today) / (1000 * 60 * 60 * 24));
  return diffDays;
}

// data sementara — nanti diganti input beneran dari fitur period tracker
const lastPeriod = '2026-09-20';
const daysLeft = getDaysUntilNextPeriod(lastPeriod);

document.getElementById('daysLeft').innerText =
  daysLeft > 0 ? `${daysLeft} hari` : 'Hari ini!';ss
